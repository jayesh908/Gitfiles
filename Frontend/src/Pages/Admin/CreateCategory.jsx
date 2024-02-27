import axios from "axios";
import React, { useEffect, useState } from "react";
import { Authcontext } from "../../context/Auth";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import { Container, Table } from "react-bootstrap";
import CategoryForm from "../../Component/Categoryform";
import ModalComp from "../../Component/Modal";
const CreateCategory = () => {
  const { baseurl } = useContext(Authcontext);
  const [category, setcategory] = useState([]);
  const [update, setupdate] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [name, setname] = useState("");

  const onhandlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseurl}/category`, { name }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await axios.get(`${baseurl}/get`);
        console.log(data.data);
        setcategory(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);

  //updating
  const handleupdate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseurl}/update/${update._id}`,update);
      const updatedata = category.map((ele) => {
        ele._id === update._id ? update : ele;
      });
      setcategory(updatedata);
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };  

  
  return (
    <>
      <Container>
        <div>
          <h1 className="text-4xl text-center mt-5">Categories</h1>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="my-3"
        >
          <CategoryForm
            value={name}
            onSubmit={onhandlesubmit}
            setvalue={setname}
          />
        </div>
        <div className="d-flex justify-center align-middle mt-5">
          <Table
            className="striped bordered hover"
            style={{ width: "50%", border: "1px solid black  " }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {category.map((ele, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ele.name}</td>
                    <td style={{ color: "blue" }}>
                      <button
                        onClick={() => {
                          setShow(true), setupdate(ele.name);
                        }}
                      >
                        <EditIcon />
                      </button>
                    </td>
                    <td>
                      <DeleteIcon />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
      {show && (
        <ModalComp
          body={
            <CategoryForm
              value={update}
              setvalue={setupdate}
              onSubmit={handleupdate}
            />
          }
          onHide={handleClose}
          show={show}
          title="Editing"
        />
      )}
    </>
  );
};

export default CreateCategory;
