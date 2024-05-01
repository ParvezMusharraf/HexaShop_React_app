import axios from "axios";
import MAIN_LocalURL from "./ApiConfig";
import MAIN_URL from "./ApiConfig";



// Get Catagories List 
export const getCatagoriesList = async () => {

  try {
      const res = await axios.get(`${MAIN_URL}/categories/`, {
          headers: {
              //   Authorization: "Bearer " + token,
          },
      });
      return res.data;
  } catch (error) {
      console.log(error);
      throw error;
  }
};

// Get Product by Catagories

export const getProductByCatagories = async (id)=>{
    try{
        const res = await axios.get(`${MAIN_URL}/products/?categoryId=${id}`,{
            headers:{
                // Authorization:"Bearer " + token,
            }
        });
        return res
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

// get All ProductsList


export const getAllProductsList = async()=>{
    try {
        const res = await axios.get(`${MAIN_LocalURL}/Allproducts`,{
            headers:{
                // Authorization:"Bearer " + token,
            }
        })
        return res
    }
    catch(error){
        console.log(error)
    }
}

