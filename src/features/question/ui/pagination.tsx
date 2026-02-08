import styles from "./style.module.css";

interface Props {
  total: number;
  activePage: number;
  onClick: (page: number) => void;
  limit: number;
}

interface ButtonProps {
  page: number;
  activeItem: number;
  onClick: (page: number) => void;
}

export const Pagination = ({ total, activePage, onClick, limit }: Props) => {
  const totalPages = Math.ceil(total / limit);
  const next = () => {
    if (activePage === totalPages) {
      return;
    }
    onClick(activePage + 1);
  };
  const prev = () => {
    if (activePage === 1) {
      return;
    }
    onClick(activePage - 1);
  };
  let content: React.ReactNode = null;

  if (totalPages <= 1) return null;

  if (activePage <= 5) {
    const end = Math.min(6, totalPages);
    content = (
      <>
        {Array.from({ length: end }).map((_, i) => (
          <ButtonNumber
            key={i}
            page={i + 1}
            onClick={onClick}
            activeItem={activePage}
          />
        ))}
        {totalPages <= 6 ? null : <p>...</p>}
        {totalPages <= 6 ? null : (
          <ButtonNumber
            page={totalPages}
            onClick={onClick}
            activeItem={activePage}
          />
        )}
      </>
    );
  }

  if (activePage > 5) {
    const start = Math.max(2, activePage - 2);
    const end = Math.min(totalPages - 1, activePage + 2);
    content = (
      <>
        <ButtonNumber page={1} onClick={onClick} activeItem={activePage} />
        <p>...</p>

        {Array.from({ length: end - start + 1 }).map((_, i) => {
          const page = start + i;
          return (
            <ButtonNumber
              key={page}
              page={page}
              onClick={onClick}
              activeItem={activePage}
            />
          );
        })}

        {activePage >= totalPages - 2 ? null : <p>...</p>}
        <ButtonNumber
          page={totalPages}
          onClick={onClick}
          activeItem={activePage}
        />
      </>
    );
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.circle}
        disabled={activePage === 1}
        onClick={prev}
      >
        <p className={styles.arrowNav}>{"\u2190"}</p>
      </button>
      {content}
      <button
        className={styles.circle}
        disabled={activePage === totalPages}
        onClick={next}
      >
        <p className={styles.arrowNav}>{"\u2192"}</p>
      </button>
    </div>
  );
};

const ButtonNumber = ({ onClick, activeItem, page }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick(page)}
      className={`${activeItem === page ? styles.activeNum : ""}`}
    >
      {page}
    </button>
  );
};
