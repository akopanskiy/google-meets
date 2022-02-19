import styles from './Search.module.css';

const Search = () => {
  return (
    <>
      <label>
        <input
          className={styles.inputSearch}
          type="text"
          placeholder="Пошук людей"
        />
      </label>
    </>
  );
};
export default Search;
