import styles from "./gallery.module.scss";
import searchStyles from "./Searchbox.module.scss";
import { useRef } from "react";
import search_icon_light from "../../assets/search_icon_dark.svg";
import search_icon_dark from "../../assets/search_icon_light.svg";
import clear_icon_dark from "../../assets/clear_dark.svg";
import clear_icon_light from "../../assets/clear_light.svg";

const normalizePath = (path: string) => path.replace(/^\/+/, "");

export default function Gallery({
  theme,
  author,
  locations,
  value,
  setValue,
  currentGallery,
}: any) {
  const inputRef = useRef<HTMLInputElement>(null); // создаем ссылку на input элемент
  // функция для очистки значения input
  const clearInput = () => {
    setValue("");
  };
  // проверка, переполняет ли содержимое ширину input
  const isOverflowing = () => {
    const input = inputRef.current;
    return input && input.scrollWidth > input.clientWidth;
  };

  return (
    /* применяем стиль в зависимости от темы */
    <div className={theme === "light" ? styles.light : styles.dark}>
      <div className={searchStyles.Search}>
        <form className={searchStyles["search-box"]}>
          <img
            src={theme === "light" ? search_icon_dark : search_icon_light}
            alt="Search Icon"
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="Painting title"
            value={value}
            onChange={(event) => setValue(event.target.value)} // обновление значения input
          />

          {isOverflowing() &&
            value && ( // показываем иконку очистки, если есть переполнение
              <img
                src={theme === "light" ? clear_icon_dark : clear_icon_light}
                alt="Clear"
                className={searchStyles["clear-button"]}
                onClick={clearInput}
              />
            )}
        </form>
      </div>

      {currentGallery.length > 0 ? (
        /* отображение списка галереи */
        <ul className={`${styles["list-group"]} mb-2`}>
          {currentGallery.map((item: any) => (
            <li className={styles["list-group-item"]} key={item.id}>
              <img src={normalizePath(item.imageUrl)} alt={item.imageUrl} />
              <div className={styles.overlay}>
                <div className={styles["text-container"]}>
                  <div className={styles.text}>
                    <h3>{item.name}</h3>
                    <p>{item.created}</p>
                  </div>
                  <div className={styles["new-text"]}>
                    {author
                      .filter((authors: any) => authors.id === item.authorId)
                      .map((authors: any) => (
                        <h3 key={authors.id}>{authors.name}</h3>
                      ))}
                    {locations
                      .filter(
                        (location: any) => location.id === item.locationId,
                      )
                      .map((location: any) => (
                        <p key={location.id}>{location.location}</p>
                      ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        // отображение сообщения, если галерея пуста
        <div className={styles.not_found}>
          <h3>
            No matches for <b>{value}</b>
          </h3>
          <p>Please try again with a different spelling or keywords.</p>
        </div>
      )}
    </div>
  );
}
