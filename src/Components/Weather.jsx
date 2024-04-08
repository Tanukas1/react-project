import React from 'react';
import './Weather.css';
import axios from 'axios';
import {useEffect,useState} from "react";


function Weather()  {
  const apiKey = "15fabefea689769bc6af42cc3bd30d96"
  const[inputCity,setInputCity] = useState({})
  const[data,setData] = useState({})
 



  // const getWeatherDetails = (cityName) => {
  //   if(!cityName) return
  //   const apiURL = "http://localhost:3000/15fabefea689769bc6af42cc3bd30d96"
  //   axios.get(apiURL).then((res)=>{
  //     console.log("response",res.data)
  //     setData(res.data)
  //   }).catch((err) => {
  //     console.log("err",err)
  //   })
  // }

  const getWeatherDetails = (cityName) => {
    if (!cityName) {
        console.error("City name is required");
        return;
    }

    const apiURL = `http://localhost:3000/15fabefea689769bc6af42cc3bd30d96?city=${cityName}`;
    
    axios.get(apiURL)
        .then((res) => {
            console.log("Response:", res.data);
            // Assuming setData is defined elsewhere in your code
            setData(res.data);
        })
        .catch((err) => {
            console.error("Error:", err.message || "Something went wrong");
            // Handle errors gracefully, e.g., show an error message to the user
        });
};
  
  const handleChangeInput = (e) => {
   console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
      getWeatherDetails(inputCity)
  }
  useEffect(()=>{
      getWeatherDetails("delhi")
  },[])

  return (
   <div className="col-md-12">
    <div class="bg">
      <h1 className="heading">Weather App</h1>

      <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control"  onChange={handleChangeInput}/>
        <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
      </div>
     
    </div>

    <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded wetherResultBox">
        <img className="weatherIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA21BMVEX///8ate3/wQY7v+//vgD/vQAAsuz/wgAAsOz/+uoAtPL///sAs+z/z0z///3/yUL/7L7/zlH//fX/yTjO7vv/8c3/9Nb/4JT/2Hv/563/3o3/24P/5af/9dz/+OX/7sX/xR//0V7/xRz/4p5myvKu4fhKwfCf3PYAtPjB6Pnt+f7e8/yN1fTk9v3/35H/0mL/zDv/1G45tuNbvtZ4wL+jvZfAwoXfxlGavabRw2PGwXSOv67lw0lpvciPv6yewZ7bw1mEv7divc9Ovd+0vo7vwzx4zfLRxG3W374OwN0+AAAIFklEQVR4nO2ceVujSBCHDTTkQnNgYjSJkmhOozHqONc6szPuOvv9P9FyBSEcge5q6DxPvf/NI2HqR3VXdVc1HB0hCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIJ8MGiM152ijeDISUuRJKJcF20HP+6JZKF0izaEF3XdFiiRftGW8KJadhRKx0VbwgtUePigQvE5afYvktJ5KoX1Zu9C1GxSbRCTdcIFKRQODesmPXjrIHiw83mCdSkU1sf2TZQzHgay0lHcfB47xryMH/8QLpxVj2S0udjIxsA1jrRiL+m7q7bYyVp17yFJQy42snG+tU5pxl1S161rlPhF29pTeMnFRjY+nn/5JPaiC91oxD6AoyvvFmLmk/7WPnKfcFU94W8PW4HkCto4ENqSR5XqBt44JyNg06AYeBZeUP3e8FxI94RyQN+aGB9OE6grbA8oD7yUSDfKtgqFTIYuIzfhDah+fez++hzYKkiqZctIotP9uuus2EQNMw6XLUmR1rSjrNMgSrkXn03F4PKSIRCeMP0aQUCo19tJy7ZDpto5748aDd0wDL3R2pw1Ra1UUNE+742t2oS3c5Dsfz2cdUQPm6moDlqKT5sfMzVsmgKvX1LRWUvR6jyRRl/E7XxamnqM9wIiyehQ5+SVoeyV5zqyJZgfh83O/tkzbKXU5/ixv/+O1eZVPtWbaosQZbxv93CfYnwGNI737CjaPUlRpDw6jye6U/jVk+r3Qz2bPgtlnbQWuHYiVkKdDozz7eBTRrFj5jy7PtuNsRHnSveGPP+B2vOsJ9JF9FPvZ5iBQaJH6uXIt1bgX4Xr+fxD9AiJJyMqDzo3jOpXdPwpVeGv8NzvILIJ/b1NMQV9AsLzrG0EruA/SutBBbtOZBMYdU7jyv9IlTzKcFV/oiM7j7TeYBMY4cWBf1rkVGdslj/+053dQYtVoClx58jUhw+V4/yWPmfu5N/tBG7YBZo3DbZu6u48JEZ8S4cD1Y21ZlEegtNwQJ0mggRdZcdSUr7OuzjQ2RiNnf+0C6NPknbqrZc9/eFChBpcXd9vezpEPanQg5iEDvF98CLpAk1Cm6jFUuGAjVGLyOVbwdDtJ+IRIbIEqBv7jc6CeMFmAOxC4Trd0C4Uz4lNyEDqIlat+BheIBHqpYVLDi6UGkWr8nMPHWcsiEhlYvA4YysU6FgN2KYiCOWRDjiWp5PVzVSWSyX58e3p+dPL5/J+q7OgFJkSl5P3UkU10WxKmlqr1ebzpy9fAQcsKezo0O1samorRaDW5vLzNyiRRSX9yVRTtSh5LrXa4/e/YCSOi9A3KyXK24p8/QyhUMl/l2jq2yvP0Th/BfBj/LF/TizklPpsjdp35vlIcq0fHi1vUozPgMbHb6wK6U5xUrKIjp6JzJ/HbAqDFf5230u4x/AtqPdKZn22G5kiTrC1VR37u2zAO4/lNLsDbVTthWWhEzhMuw4s7xXQdfld2hAa5cZPDBL9J+KrwfuAVuNOtWwhJsj8F71Ev8Jh8E+QCx42gUwSAz7cUQg3EW8ZBZoD9QelxOBbDcHW3W5vlp47ZoGmF39SKgzEUn9/ncDtO5Yyu0BT4gudwp1d/nWr4bKBi6Q39FHUj/Y3lcIcNogrGIEl9ZFmkZrD8aBTqpVMFLVnimjDv9q2LEFMQgeaqUh4Czx6BxqjDuPMCg3eAk9BBdZ+ZXYh96OWtMvtOIlZ4yn3DfACLMy4Cl8zBhvCu/sEkusDEr9mU0j1rm0GFrBj1FL4O5MTubfXptAuNDNGtvob56OksIHUIVs45T1I3+FdaPLy8/n309vb0+uPf/7sGbK8F6VLHvqsanjN6udYfZza/PFLYv7gXPCGjzNh1Nr87cu/cS7kfSoKdsEWT630K1oj92SYjz5bY2SRg3uLG27blEaj/CekcMzbhZOcBqmDGnIj/44FUPEiNbXfwRpAg/sbwoBb35QSH/0BJ4fNfc4u3JEY+lxbG3xW3uav0JS4Hahk5ztY3ZFhrIG9mke+D0t8csNNOXiOpmm92kFID9SP+YZST6Lb4Age1G+7uglgfF0uV3kHGleiVY/b/aDdx9FVokPUT09XN3Ip90jqoYebu4F31xK+rJlO3rtmHeQqSp5VNw5v7Dt7XunMwGJaKWT6+an8FzIr+EonQ6a8zXqYhAvqTdiyof+EAn0rY0ZxmIQH6m3YtnbvY6BSv+l8k+deIgntPcq84ce7qZRnToGr20wsIy1sGs43FSgrjFnOq/FGnUTbWL8uK0qZUqBIHoyMNQ4n3S5lcQqqzwtEhU5FAoWsshNQT6EVFrdEiyZuIlIj2Bg1FUbmC3oK2M3vQ57NFndwCoVzoYlV9pdXEYsbKsDboECYm5wpiEboTjYkagViRubVnqBDldnno6iD1EUtsY7UpcCD1EaLWYinRrT1TBhVZlNYTNUwE+qKSeFMfIUljWkqFlQXzUT8dioNfA5cAKOypAwR12whmGbiIczDksYSTg8glppUGHJirgcSqKkw7PoF3B1GoC7oFfI4gAgPU13jMIIpi8IiGvaZYatNCb59smGahweRLyps+2DRyqVRMAk8mgifEpkLqEL1ZaJgSfg2d0Ur2IM2ZRQofCmDLZI6rESeiiq7C49oPwmRDxpjsc1F3MUbxBi1mQC8k84DwGbinUinFbZosN3SVF+AyhVVhuqwuSxnsiAHoyw0tTSD1WezcL4zpxWMqqkVeQYTRMPcOp8KLJSb1QSwzY0gCIIgCIIgCIIgCIIgCIIgCIIgCIIgSBH8D+/7tbNcRsd6AAAAAElFTkSuQmCC"/>
      
        <h5 className="weatherCity">{data?.name}</h5>
        <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)} °C</h6>
      
      </div>

    </div>
   </div>
    
  )
}
export default Weather


