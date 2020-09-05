// import React, { useState, useEffect } from 'react';

// const IntervalExample = () => {
//     const [seconds, setSeconds] = useState(0);

//     useEffect(() => {
        
//     }, []);

//     return  (
//         <>
//             <p> {seconds} </p>
//         </>
//     );
// };

import React, { Component } from 'react';

class time extends Component {
   constructor(props){
       super(props);
       this.state= {
           count : new Date("2020/09/04 18:00"),
           sale : "0 ngày 0 phút 0 giây",
       }
   }
    componentDidMount(){
        this.interval = setInterval(() => {
            this.state.sale = ""
            let dateNow = new Date()
            let countTime = new Date(this.state.count)
            let dateSale = countTime - dateNow
            
            // setSeconds(seconds => seconds + 1);
            let ngay = Math.floor(dateSale/1000/60/60/24)
            let gio = Math.floor(dateSale / 1000/60/60 - ngay*24)
            let phut = Math.floor(dateSale / 1000/60 - ngay*24 * 60  -gio*60)
            let giay = Math.floor(dateSale / 1000  - ngay*24*60*60 -gio*60*60 -phut*60)
           
            this.setState({ 
                sale : ngay.toString()+ "Ngày" + gio.toString() + "Giờ" + phut.toString() + "Phút" + giay.toString() + "Giây"
            },)
        }, 1000);
        // return () => clearInterval(interval);
    }
    render() {
        return (
            <div>
                {this.state.sale}
            </div>
        );
    }
}

export default time;

// export default IntervalExample;