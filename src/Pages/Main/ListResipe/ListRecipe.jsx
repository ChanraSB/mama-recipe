import { getAllList } from "../../../../config/action/recipeAction";
import Card from "../../../Component/Base/Card/Card";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import Input from "../../../Component/Base/Input/Input";
import { useLocation } from "react-router-dom";
const ListRecipe = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");
  const [params, setParams] = useState({
    page: 1,
    pageSize: 3,
    search: searchValue || "",
    sort: "title",
    sortOrder: "asc",
    filter: {},
  });

  const dispatch = useDispatch();
  const { recipeList, totalPages } = useSelector((state) => state.recipe);

  useEffect(() => {
    const getRecipe = () => {
      const { page, pageSize, search, sort, sortOrder, filter } = params;
      const response = dispatch(getAllList({ page, pageSize, search, sort, sortOrder, filter }));
      console.log(response);
    };
    getRecipe();
  }, [dispatch, params]);

  const handleFirstPage = () => {
    setParams({
      ...params,
      page: 1,
    });
  };

  const handleNextPage = () => {
    setParams({
      ...params,
      page: Math.min(params.page + 1, totalPages),
    });
  };

  const handlePrevPage = () => {
    setParams({
      ...params,
      page: Math.max(params.page - 1, 1),
    });
  };

  const handleLastPage = () => {
    setParams({
      ...params,
      page: totalPages,
    });
  };
  const handleSorting = (e) => {
    const value = e.target.value;
    if (value === "title-up") {
      setParams({
        ...params,
        sort: "title",
        sortOrder: "asc",
      });
    } else if (value === "title-down") {
      setParams({
        ...params,
        sort: "title",
        sortOrder: "desc",
      });
    }
  };

  const handleSeach = (e) => {
    setParams({
      ...params,
      search: e.target.value,
    });
    console.log(params.search);
  };

  return (
    <div>
      <div className="container">
        <div className="row  align-items-center justify-content-between">
          <div className="col-6  align-items-center w-60">
            <Input type="text" placeholder="search" required={true} onChange={handleSeach} value={params.search} />
          </div>
          <div className="col-3 ">
            <label htmlFor="sorting">Sort</label>
            <select className="form-select" id="sorting" onChange={handleSorting}>
              <option value="title-up">A</option>
              <option value="title-down">DSC</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container myRecipeCardWrapper">
        <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-col-xxl-3 align-items-center">
          {recipeList && recipeList.map((item) => <Card key={item.id} to={`/detail+recipe/${item.id}`} src={item.image} title={item.title}></Card>)}
        </div>
        <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="container" style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
            <Pagination className="pagination" size="lg">
              <Pagination.First onClick={handleFirstPage} />
              <Pagination.Prev onClick={handlePrevPage} />
              <Pagination.Item>{params.page}</Pagination.Item>
              <Pagination.Next onClick={handleNextPage} />
              <Pagination.Last onClick={handleLastPage} />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRecipe;
