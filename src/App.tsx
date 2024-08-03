import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store/store";
import { toggleTheme } from "./features/themeSlice";
import Navbar from "./Components/NavBar/Navbar";
import Gallery from "./Components/Gallery/gallery";
import PaginationSize from "./Components/Pagination/pagination";
import {
  useGetPaintingsQuery,
  useGetAuthorsQuery,
  useGetLocationsQuery,
} from "./services/galleryApi";

export default function App() {
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);
  const [currentPage, setCurrentPage] = useState(1);
  const [galleryPerPage] = useState(6);
  const [value, setValue] = useState("");

  const { data: paintings = [], isLoading: loadingPaintings } =
    useGetPaintingsQuery({});
  const { data: authors = [] } = useGetAuthorsQuery({});
  const { data: locations = [] } = useGetLocationsQuery({});

  const filteredGallery = paintings.filter((item: { name: string }) =>
    item.name.toLowerCase().includes(value.toLowerCase()),
  );

  const lastGalleryIndex = currentPage * galleryPerPage;
  const firstGalleryIndex = lastGalleryIndex - galleryPerPage;
  const currentGallery = filteredGallery.slice(
    firstGalleryIndex,
    lastGalleryIndex,
  );
  const paginate = (event: any, pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} toggleTheme={() => dispatch(toggleTheme())} />
      <Gallery
        theme={theme}
        author={authors}
        locations={locations}
        value={value}
        setValue={setValue}
        currentGallery={currentGallery}
      />
      {filteredGallery.length > galleryPerPage && (
        <PaginationSize
          count={Math.ceil(filteredGallery.length / galleryPerPage)}
          page={currentPage}
          onChange={paginate}
          theme={theme}
        />
      )}
    </div>
  );
}
