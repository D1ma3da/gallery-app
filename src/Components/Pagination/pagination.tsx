import styles from "./pagination.module.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationSize({ count, page, onChange, theme }: any) {
  return (
    <Stack spacing={2}>
      <Pagination
        sx={
          theme === "light"
            ? {
                button: {
                  color: "#575757",
                  "&:not(:has(svg)):focus": {
                    background: "rgba(18, 18, 18, 0.05)",
                  },
                  "&:has(svg):hover": {
                    color: "#121212",
                    background: "rgba(18, 18, 18, 0.05)",
                  },
                },
                "&:hover,&:focus": { color: "#575757" },
                li: { "&:not(:has(svg)):after": { color: "#9C9C9C" } },
              }
            : {
                button: {
                  color: "#DEDEDE",
                  "&:not(:has(svg)):focus": { background: "#1A1818" },
                  "&:has(svg):hover": {
                    color: "#FFFFFF",
                    background: "#1A1818",
                  },
                },
                "&:hover,&:focus": { color: "#DEDEDE" },
                li: { "&:not(:has(svg)):after": { color: "#575757" } },
              }
        }
        count={count}
        page={page}
        onChange={onChange}
        size="small"
        className={styles.pagination}
      />
    </Stack>
  );
}
