"use client";
import React, { useState, useEffect, useRef } from "react";
import { Burger, BurgerLine } from "./ButtonMenuMobile.styled.js";
import { Menu, Nav,  User, Admin } from "./MenuNav.styled.js";
import Link from "next/link";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

import { UsersGalleries } from "./MenuUsersGallery/MenuUsersGallery.js";
import { ForAdminUsersGalleries } from "@/components/ForAdmin/ForAdminUsersGalleries/ForAdminUsersGalleries.js";

export const MenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const burgerRef = useRef(null); // Dodajemy referencję do burgera
  const auth = getAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); // Przełączanie stanu menu
  };

  // Funkcja zamykająca menu przy kliknięciu poza nim
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) && // Sprawdzamy, czy kliknięcie nie było w menu
      burgerRef.current &&
      !burgerRef.current.contains(event.target) // Sprawdzamy, czy kliknięcie nie było w burgerze
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid); // Ścieżka do kolekcji użytkowników
          const userDoc = await getDoc(userRef);
          if (userDoc.exists() && userDoc.data().role === "admin") {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        } catch (error) {
          console.error("Błąd podczas sprawdzania roli użytkownika:", error);
          setIsAdmin(false);
        }
      } else {
        // Użytkownik wylogowany
        setIsAdmin(false);
      }
      setIsCheckingAuth(false);
    });

    // Czyszczenie subskrypcji
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <Menu>
      <Burger onClick={toggleMenu} $isOpen={isOpen} ref={burgerRef}>
        {" "}
        {/* Użycie referencji dla burgera */}
        <BurgerLine className="first" />
        <BurgerLine className="second" />
        <BurgerLine className="third" />
      </Burger>
      <Nav $isOpen={isOpen} ref={dropdownRef}>
        <li>
          <Link href="/home" onClick={() => setIsOpen(false)}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <p>Contact</p>
          </Link>
        </li>
        <User $isAdmin={isAdmin}>
          <Link href="/my-gallery" onClick={() => setIsOpen(false)}>
            <p>My Gallery</p>
          </Link>
        </User>
        <Admin $isAdmin={isAdmin}>
          <Link href="/my-gallery" onClick={() => setIsOpen(false)}>
            <p>Benbud Gallery</p>
          </Link>
        </Admin>
        {/* <li>
          <UsersGalleries />
        </li> */}
        <li>
          <ForAdminUsersGalleries />
        </li>
      </Nav>
    </Menu>
  );
};
