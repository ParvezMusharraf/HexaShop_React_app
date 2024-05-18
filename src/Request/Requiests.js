import axios from "axios";
import MAIN_LocalURL from "./ApiConfig";
import MAIN_URL from "./ApiConfig";



// Get Catagories List 
export const getCatagoriesList = async () => {

  try {
      const res = await axios.get(`${MAIN_LocalURL}/getAllCatagoryList`, {
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


export const getProductListByCategory = async (data) => {

  try {
      const res = await axios.get(`${MAIN_LocalURL}/AllproductsByCategory?category=${data}`);
      return res.data;
  } catch (error) {
      console.log(error);
      throw error;
  }
};

// Get Product by Catagories

// export const getProductByCatagories = async (id)=>{
//     try{
//         const res = await axios.get(`${MAIN_URL}/products/?categoryId=${id}`,{
//             headers:{
//                 // Authorization:"Bearer " + token,
//             }
//         });
//         return res
//     }
//     catch(error){
//         console.log(error);
//         throw error;
//     }
// }

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



// Post Requiest for Product 

export const SaveProduct = async(data)=>{
    try{
        const res = await axios.post(`${MAIN_LocalURL}/SaveProduct`,data)
        return res
    }
    catch(error){
        console.log(error)
    }
}
