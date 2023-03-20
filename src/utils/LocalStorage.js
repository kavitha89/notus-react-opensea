
export const setGetLocalStorageItem = () => {
    var cond = localStorage.getItem("isAuthenticated");
    if (cond === null) {
      console.log("was null setting to false");
      cond = false;
    } else {
      cond = JSON.parse(cond);
    }
  
    console.log(cond);
    cond = !cond;
    console.log(cond);
    localStorage.setItem("isAuthenticated", cond);
  };