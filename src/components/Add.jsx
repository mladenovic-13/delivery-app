import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Add.module.css";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState(null);
  const [extraOptions, setExtraOptions] = useState([]);

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = () => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "deliveryApp");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/mladenovic13/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url,
      };

      await axios.post(
        "https://delivery-mr3tvhv6b-mladenovic-13.vercel.app/api/products",
        newProduct
      );
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1 className={styles.title}>Add a new Pizza</h1>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Coose an image:
          </label>
          <input onChange={(e) => setFile(e.target.files[0])} type="file" />
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Title:
          </label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="desc" className={styles.label}>
            Description:
          </label>
          <textarea
            className={styles.input}
            type="text"
            name="desc"
            rows={4}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.priceContainer}>
          <label htmlFor="" className={styles.label}>
            Prices:
          </label>
          <input
            className={`${styles.input} ${styles.inputSm}`}
            type="number"
            placeholder="Small"
            onChange={(e) => changePrice(e, 0)}
          />
          <input
            className={`${styles.input} ${styles.inputSm}`}
            type="number"
            placeholder="Medium"
            onChange={(e) => changePrice(e, 1)}
          />
          <input
            className={`${styles.input} ${styles.inputSm}`}
            type="number"
            placeholder="Large"
            onChange={(e) => changePrice(e, 2)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Extra:
          </label>
          <div className={styles.extra}>
            <input
              className={styles.input}
              onChange={handleExtraInput}
              type="text"
              name="text"
              placeholder="Extra's text"
            />
            <input
              className={styles.inputSm}
              type="number"
              onChange={handleExtraInput}
              placeholder="Price"
              name="price"
            />
            <button onClick={handleExtra} className={styles.extraBtn}>
              Add Extra
            </button>
          </div>
          <ul className={styles.extraItems}>
            {extraOptions.map((extra, index) => (
              <li className={styles.extraItem} key={index}>
                {extra.text}
              </li>
            ))}
          </ul>
        </div>
        <button className={styles.createBtn} onClick={handleCreate}>
          CREATE
        </button>
      </div>
    </div>
  );
};

export default Add;
