import styles from "../page.module.css";

export default function HomePage() {
  return (
    <div className={styles.main__next}>
      <div
        style={{
          width: "80%",
          margin: "20px auto",
          backgroundColor: "rgba(240, 240, 240, 0.9)",
          padding: "10px",
        }}
      >
        <h2>Witamy w naszej aplikacji!</h2>
        <p>
         Trzeba wymyslec jakas tresc
        </p>
        <h2>Przesyłanie zdjęć i opisów</h2>
        <p>
         ...................
        </p>
        <h2>Koordynacja i umawianie spotkań</h2>
        <p>
          Organizuj spotkania, koordynuj terminy i dbaj o szczegóły – wszystko w
          jednym miejscu. Dzięki naszej aplikacji Twoja komunikacja z nasza firma
          stanie się prostsza i bardziej efektywna.
        </p>
        <h2>Sprawniejsza organizacja pracy</h2>
        <p>
         ................
        </p>
        <h2>Rejestracja i logowanie</h2>
        <p>
          Aby w pełni skorzystać z naszej platformy i uzyskać dostęp do
          wszystkich funkcji, musisz się zarejestrować i utworzyć konto.
          Rejestracja jest szybka i prosta — wystarczy kilka kroków, aby zyskać
          pełne możliwości naszego serwisu. Po zalogowaniu się będziesz mógł
          korzystać z personalizowanych opcji i śledzić postęp Twojego zgłoszenia.
        </p>
        <p>
          Pamiętaj, że Twoje konto zapewni Ci pełną kontrolę nad naszą
          korespondencją, a także ułatwi korzystanie z naszej platformy.
          Zachęcamy do rejestracji, aby móc w pełni cieszyć się wszystkimi
          funkcjami, które przygotowaliśmy z myślą o Tobie!
        </p>
        <h2>Dziękujemy, że jesteś z nami!</h2>
      </div>
    </div>
  );
}
