import ProductCard from "./ProductCard";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useState, useEffect, useRef } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Pic4 from "../../Images/Pic4.jpg";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ProductsListApi, fetchCategories } from "./ProductListApis";
import _ from 'lodash';
const ProductList = (props) => {
  let location = useLocation();
  const CategoryID = location.state?.CategoryID;
  console.log(CategoryID, "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
  let title = "Our products";
  const [state, setState] = useState({
    count: 1,
    search: "",
    ProductList: [],
    CategoriesList: CategoryID ? [{ id: CategoryID, is_true: true }] : [],
    SubVariantList: [],
    Sort: [
      // {name:'Most Popular',is_true:false},
      // {name:'Best Rating',is_true:false},
      { id: 1, name: "Newest", is_true: false },
      { id: 2, name: "Price: Low to High", is_true: false },
      { id: 3, name: "Price: High to Low", is_true: false },
    ],
    SelectedCategories: CategoryID ? [CategoryID] : [],
    SelectedSizes: [],
  });
  const [page, setPage] = useState(1);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const PER_PAGE = 12;
  const count = Math.ceil(state.count / PER_PAGE);

  const changeCategoryFilter = (i, index) => {
    let SelectedCategories = state.SelectedCategories;

    let value = getCategoryValue(i);
    if (value) {
      SelectedCategories = SelectedCategories.filter((item) => item !== i.id);
    } else {
      SelectedCategories.push(i.id);
    }

    setState((prev) => {
      return {
        ...prev,
        SelectedCategories: SelectedCategories,
        is_category: true,
      };
    });
  };
  const getCategoryValue = (value) => {
    const SelectedCategories = state.SelectedCategories;
    return SelectedCategories.some((i) => i === value.id);
  };

  const changeSizeFilter = (i, index) => {
    let SelectedSizes = state.SelectedSizes;

    let value = getSizeValue(i);
    if (value) {
      SelectedSizes = SelectedSizes.filter((item) => item !== i.id);
    } else {
      SelectedSizes.push(i.id);
    }

    setState((prev) => {
      return {
        ...prev,
        SelectedSizes: SelectedSizes,
        is_size: true,
      };
    });
  };
  const getSizeValue = (value) => {
    const SelectedSizes = state.SelectedSizes;
    return SelectedSizes.some((i) => i === value.id);
  };

  useEffect(() => {
    const fetchDataCatogory = async () => {
      try {
        const { categorydata: categories, subvariantsdata: subvariants } =
          await fetchCategories();

        let categories_list = categories.map((element) => ({
          ...element,
          is_true: false,
        }));
        console.log("kkkk1111");
        if (CategoryID) {
          categories_list = categories_list.map((item) =>
            item.id === CategoryID ? { ...item, is_true: true } : item
          );
          console.log("kkkk");
        }
        let subvariants_list = subvariants.map((element) => ({
          ...element,
          is_true: false,
        }));

        console.log(categories_list);
        setState((prev) => {
          return {
            ...prev,
            CategoriesList: categories_list,
            SubVariantList: subvariants_list,
          };
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataCatogory();
  }, []);

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };

  const FetchData2 = async () => {
    // setPage(1)
    //api calling here
    let search = state.search;
    let SelectedCategories = state.SelectedCategories;
    let SelectedSizes = state.SelectedSizes;
    let page_no = page;
    let items_per_page = PER_PAGE;
    try {
      const productsResponse = await ProductsListApi.get("", {
        //url params
        params: {
          search: search,
          categories: SelectedCategories.join(","),
          sub_variants: SelectedSizes.join(","),
          page_no:1,
          items_per_page,
        },
      });
      //response
      
      let data = productsResponse.data.data;
      let count = productsResponse.data.count;
      setState((prev) => {
        return {
          ...prev,
          ProductList: data,
          count,
          is_category: false,
          is_size: false,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("***********************************");
    const timeoutId = setTimeout(() => {
      console.log("1111111");
      FetchData2();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [state.search, state.is_category == true, state.is_size == true]);




useEffect(()=>{
  const FetchData2 = async () => {
    //api calling here
    let search = state.search;
    let SelectedCategories = state.SelectedCategories;
    let SelectedSizes = state.SelectedSizes;
    let page_no = page;
    let items_per_page = PER_PAGE;
    try {
      const productsResponse = await ProductsListApi.get("", {
        //url params
        params: {
          search: search,
          categories: SelectedCategories.join(","),
          sub_variants: SelectedSizes.join(","),
          page_no,
          items_per_page,
        },
      });
      //response
      let data = [...state.ProductList, ...productsResponse.data.data];
      // let data = productsResponse.data.data;
      let count = productsResponse.data.count;
      setState((prev) => {
        return {
          ...prev,
          ProductList: data,
          count,
          is_category: false,
          is_size: false,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };
  FetchData2()
},[page])


  const [showPagination, setShowPagination] = useState(false);


  const containerRef = useRef();

  const throttledHandleScroll = useRef(
    _.throttle(() => {
      const container = containerRef.current;
      if (
        container.scrollHeight - container.scrollTop <= container.clientHeight + 0.5 ||
        container.scrollHeight - container.scrollTop === container.clientHeight
      ) {
        // Load more data when the user is near the bottom
        setPage((prevPage) => prevPage + 1);
      }
    }, 500) // Adjust the throttle duration as needed
  ).current;

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', throttledHandleScroll);
    container.addEventListener('touchmove', throttledHandleScroll);
    return () => {
      container.removeEventListener('scroll', throttledHandleScroll);
      container.removeEventListener('touchmove', throttledHandleScroll);
    };
  }, [throttledHandleScroll]);
  


  console.log(state, "stt");
  return (
    <div style={{ height: "calc(100vh - 150x)" }}>
      <Navbar />
      <div
        className="mx-2 mx-sm-4 mx-md-4 mx-lg-4 card card-product card-plain mt-1 mt-sm-2 mt-md-3 mt-lg-5 h-sm-auto"
        style={{ maxWidth: "100vw" }}
      >
        <div className="d-block d-sm-flex border-bottom pb-md-3">
          {title.length !== 0 && <h2 className="mb-3">{title}</h2>}

          <div className="d-flex ms-auto align-items-center">
            <TextField
              id="standard-basic"
              label="search"
              variant="standard"
              onChange={(e) => handleChange(e)}
              InputProps={{
                endAdornment: <SearchIcon style={{ color: "grey" }} />,
                classes: {
                  root: "custom-input-root",
                },
                style: { height: "30px", width: "200px" },
              }}
            />

            <div className="dropdown">
              {/* <button
                className="btn btn-link text-dark mb-0 dropdown-toggle p-2 p-sm-3"
                type="button"
                id="sortButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul className="dropdown-menu" aria-labelledby="sortButton">
                {state.Sort.map((i, index) => (
                  <li>
                    <p className="dropdown-item">{i.name}</p>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
        <div className="row mt-1 mt-sm-2 mt-md-4 mt-lg-5 h-100">
          <div className="col-12 col-md-4">
            <div className="accordion" id="accordionArrivals">
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button border-bottom font-weight-bold py-1 py-md-2 py-lg-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Category
                    <ExpandMoreIcon />
                  </button>
                </h5>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionArrivals"
                >
                  <div className="accordion-body text-sm opacity-8">
                    {state.CategoriesList.map((i, index) => (
                      <div className="form-check justify-content-start ">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          checked={getCategoryValue(i)}
                          id="customCheck8"
                          onClick={(e) => changeCategoryFilter(i, index)}
                        />
                        <label htmlFor="customCheck1">{i.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingFifth">
                  <button
                    className="accordion-button border-bottom font-weight-bold py-1 py-md-2 py-lg-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFifth"
                    aria-expanded="false"
                    aria-controls="collapseFifth"
                  >
                    Size
                    <ExpandMoreIcon />
                  </button>
                </h5>
                <div
                  id="collapseFifth"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFifth"
                  data-bs-parent="#accordionArrivals"
                >
                  <div className="accordion-body text-sm opacity-8">
                    {state.SubVariantList.map((i, index) => (
                      <div className="form-check justify-content-start ">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          checked={getSizeValue(i)}
                          onClick={(e) => changeSizeFilter(i, index)}
                          id="customSize1"
                        />
                        <label className="custom-control-label mb-0">
                          {i.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-12 col-md-8">
            <div
              className="row"
              style={{ height: "60vh", overflowY: "scroll" }}
            >
              {state.ProductList.map((product) => (
                <div className="col-6 col-md-6 col-lg-4 px-1 px-sm-2 ">
                  <ProductCard
                    position="center"
                    product={product}
                  />
                </div>
              ))}
            </div>
            <div className="col-sm-12 mt-4 mb-4 ">
              <Pagination
                style={{ display: "flex", justifyContent: "center" }}
                count={count}
                page={page}
                onChange={handleChangePage}
              />
            </div>
          </div> */}
          <div className="col-12 col-md-8">
            <div
              ref={containerRef}
              className="row"
              style={{ height: "60vh", overflowY: "scroll" }}
            >
              {state.ProductList.map((product) => (
                <div
                  className="col-6 col-md-6 col-lg-4 px-1 px-sm-2"
                  key={product.id}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            {/* {showPagination && (
              <div className="col-sm-12 mt-4 mb-2 ">
                <Pagination
                  style={{ display: "flex", justifyContent: "center" }}
                  count={count}
                  page={page}
                  onChange={handleChangePage}
                />
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default ProductList;
