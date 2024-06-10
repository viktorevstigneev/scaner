import React, { useCallback, useEffect, useState } from "react";
import Modal from "../Modal";
import { PRODUCTS } from "../../data";
import "./style.css";

const INSTICTION = [
  {
    title: "Поиск штрих-кода",
    text: "Необходимо взять в руки товар или упаковку от товара. Найти специальное обозначение черно-белых полос, зачастую с цифрами",
  },
  {
    title: "Сканирование",
    text: "Нажмите кнопку Сканировать штрих-код. Разрешите доступ к камере смартфона. Наведите камеру смартфона вертикально на штрих-код",
  },
  {
    title: "Изучите товар",
    text: "В открывшемся окне появиться информация про необходимый товар. Смотрите описание товара, цену, способ применения и другую полезную информацию.Далее товар можно сохранить или перейти на сайт для покупки.",
  },
];

const POPUP_OVERLAY_CLASSNAME = "modal__window";

function Content({ setIsOpnScaner, qrMessage }) {
  console.log("qrMessage: ", qrMessage);
  const [currentProduct, setCurrentProduct] = useState({});

  const [isNotFound, setNotFound] = useState(false);
  console.log("isNotFound: ", isNotFound);
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log("isOpenModal: ", isOpenModal);

  useEffect(() => {
    const foundItem = PRODUCTS.find((item) => item.sku == qrMessage);
    console.log("foundItem: ", foundItem);
    if (foundItem) {
      setCurrentProduct(foundItem);
    } else {
      setNotFound(true);
    }
  }, [qrMessage]);

  const handleModalWindowCloseButtonClick = useCallback((evt) => {
    evt.preventDefault();
    setIsOpenModal(false);
    setCurrentProduct({});
  }, []);

  const handleModalWindowOverlayClick = useCallback((evt) => {
    if (evt.target.classList.contains(POPUP_OVERLAY_CLASSNAME)) {
      setIsOpenModal(false);
      setCurrentProduct({});
    }
  }, []);

  return (
    <>
      <header className="main_header">
        <nav className="header_nav">
          <a className="nav_item" href="#main">
            <img
              class="nav_img"
              src="https://static.tildacdn.biz/lib/icons/tilda/house_home_window.svg"
              alt=""
            />
            Главная
          </a>
          <a
            className="nav_item"
            href="https://bromcosmetic.by/"
            target="_blank"
          >
            <img
              class="nav_img"
              src="https://static.tildacdn.biz/lib/icons/tilda/infrastructure_store.svg"
              alt=""
            />
            магазин
          </a>
          <div className="nav_item">
            <img
              class="nav_img"
              src="https://static.tildacdn.biz/lib/icons/tilda/save.svg"
              alt=""
            />
            история
          </div>
          <a className="nav_item" href="#contact">
            <img
              class="nav_img"
              src="https://static.tildacdn.biz/lib/icons/tilda/envelope_e-mail_mail_post_contact_send.svg"
              alt=""
            />
            контакты
          </a>
        </nav>
      </header>
      <div className="main_logo">
        <img
          class="main_logo_img"
          src="https://static.tildacdn.biz/tild3934-6664-4563-a632-393733653034/_.png"
          imgfield="img"
          alt=""
        />
      </div>
      <div className="main_wrapper">
        <button
          className="main_btn"
          onClick={() => {
            setIsOpnScaner(true);
          }}
        >
          Сканировать штрих-код
        </button>
      </div>
      <div className="main_instuction">
        <h2 className="main_subt">Инструкция</h2>
        <div className="main_center">
          <div className="main_left">
            {["first", "dash", "second", "dash", "third"].map((item) => (
              <div className={item} key={item}></div>
            ))}
          </div>

          <div className="main_right">
            {INSTICTION.map((item) => (
              <div className="main_item">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="main__footer">
        <h3 className="footer_title" id="contact">
          КОНТАКТЫ
        </h3>
        <p className="footer_text">Спасибо что выбрали нас !</p>

        <ul role="list" class="footer_contact" aria-label="Social media links">
          <li class="footer_link">
            <a
              href="https://www.instagram.com/bromcosmetic/"
              target="_blank"
              rel="nofollow noopener"
              aria-label="instagram"
            >
              <svg
                class="t-sociallinks__svg"
                role="presentation"
                width="70px"
                height="70px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </a>
          </li>
          &nbsp;
          <li class="footer_link">
            <a
              href="https://www.tiktok.com/@bromcosmetic"
              target="_blank"
              rel="nofollow noopener"
              aria-label="tiktok"
            >
              <svg
                class="t-sociallinks__svg"
                role="presentation"
                width="70px"
                height="70px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm5.495-74.986c-1.555.002-3.113.004-4.676.028l.001.002c-.04 5.37-.038 10.742-.035 16.12.001 3.007.003 6.015-.004 9.026-.006 1.01-.005 2.019-.004 3.027.002 2.712.005 5.421-.144 8.138-.022.754-.4 1.417-.767 2.06l-.088.154c-1.212 1.977-3.442 3.327-5.769 3.352-3.51.31-6.797-2.563-7.292-5.982-.004-.167-.01-.336-.016-.505-.034-.964-.069-1.948.298-2.846.522-1.482 1.524-2.791 2.843-3.646 1.806-1.255 4.222-1.442 6.29-.773 0-1.318.022-2.636.044-3.953.03-1.767.06-3.534.036-5.303-4.525-.846-9.358.585-12.808 3.59-3.044 2.58-5.005 6.372-5.38 10.336a34.879 34.879 0 0 0 .025 3.1c.431 4.876 3.392 9.418 7.6 11.9 2.54 1.496 5.516 2.309 8.496 2.139 4.858-.082 9.588-2.686 12.313-6.682 1.694-2.4 2.655-5.299 2.818-8.211.042-4.001.04-8.01.036-12.023 0-2.068-.002-4.138.003-6.208 1.082.708 2.189 1.4 3.376 1.938 2.727 1.293 5.746 1.919 8.75 2.017v-8.39c-3.206-.357-6.501-1.415-8.83-3.726-2.335-2.255-3.482-5.504-3.646-8.693-1.156.01-2.312.012-3.47.014Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </a>
          </li>
          &nbsp;
          <li class="footer_link">
            <a
              href="https://bromcosmetic.by/"
              target="_blank"
              rel="nofollow noopener"
              aria-label="website"
            >
              <svg
                class="t-sociallinks__svg"
                role="presentation"
                width="70px"
                height="70px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM43.1192 25.9588C42.7309 26.4078 42.3383 26.8888 41.946 27.4032C39.4191 30.7167 36.9293 35.3813 35.6505 41.6978H26.4111C29.0843 34.1017 35.3234 28.1857 43.1192 25.9588ZM25 49.9979C25 48.2235 25.1849 46.4923 25.5364 44.8225H35.1389C34.8984 46.7237 34.7656 48.7559 34.7656 50.9255C34.7656 52.3779 34.8252 53.7602 34.9368 55.0756H25.5161C25.1777 53.436 25 51.7377 25 49.9979ZM42.3083 73.7903C34.8591 71.3843 28.9386 65.5776 26.3769 58.2003H35.3161C36.4534 65.3227 39.1925 70.1988 42.0073 73.4492C42.1077 73.565 42.208 73.6787 42.3083 73.7903ZM48.35 74.9422L48.4375 74.9477V58.2003H38.4839C39.5758 64.4887 42.0087 68.6774 44.3697 71.4036C45.8002 73.0554 47.2242 74.1932 48.35 74.9422ZM73.6231 58.2003C71.0614 65.5776 65.1409 71.3843 57.6917 73.7903C57.792 73.6787 57.8923 73.565 57.9927 73.4492C60.8075 70.1988 63.5466 65.3227 64.6839 58.2003H73.6231ZM75 49.9979C75 51.7377 74.8223 53.436 74.4839 55.0756H65.0632C65.1748 53.7602 65.2344 52.3779 65.2344 50.9255C65.2344 48.7559 65.1016 46.7237 64.8611 44.8225H74.4636C74.8151 46.4923 75 48.2235 75 49.9979ZM56.8808 25.9588C64.6766 28.1857 70.9157 34.1017 73.5889 41.6978H64.3495C63.0707 35.3813 60.5809 30.7167 58.054 27.4032C57.6617 26.8888 57.2691 26.4078 56.8808 25.9588ZM51.65 74.9422C52.7758 74.1932 54.1998 73.0554 55.6303 71.4036C57.9913 68.6774 60.4242 64.4887 61.5161 58.2003H51.5625V74.9477L51.65 74.9422ZM48.4375 55.0756H38.0738C37.9548 53.7708 37.8906 52.3889 37.8906 50.9255C37.8906 48.7369 38.0342 46.7056 38.2907 44.8225H48.4375V55.0756ZM61.9262 55.0756H51.5625V44.8225H61.7093C61.9658 46.7056 62.1094 48.7369 62.1094 50.9255C62.1094 52.3889 62.0452 53.7708 61.9262 55.0756ZM44.431 29.2979C45.8667 27.4153 47.2975 26.042 48.4375 25.1006V41.6978H38.8444C40.0593 36.1765 42.2624 32.1415 44.431 29.2979ZM61.1556 41.6978C59.9407 36.1765 57.7376 32.1415 55.569 29.2979C54.1333 27.4153 52.7026 26.042 51.5625 25.1006V41.6978H61.1556Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
        <a className="footer_email" href="mailto:bromcosmitic@gmail.com">
          Email : bromcosmitic@gmail.com
        </a>
      </footer>

      {isOpenModal && (
        <Modal
          onCloseButtonClick={handleModalWindowCloseButtonClick}
          onOverlayClick={handleModalWindowOverlayClick}
        >
          {currentProduct && !isNotFound ? (
            <div className="card_wrapper">
              <img
                src={currentProduct?.gallery[0]?.img}
                alt=""
                className="card_left"
              />
              <div className="card_right">
                <h2 className="card_title">{currentProduct?.title}</h2>
                <p className="card_sku">SKU:{currentProduct?.sku}</p>
                <p className="card_price">
                  {Math.floor(currentProduct?.price)} p.
                </p>
                <a href={currentProduct?.url} className="card_link">
                  Перейти в магазин
                </a>
                <p className="card_descr">{currentProduct?.text}</p>
                <p className="card_descr">Способ применения:</p>
              </div>
            </div>
          ) : (
            <div className="not_found">Товар не найден</div>
          )}
        </Modal>
      )}
    </>
  );
}

export default Content;
