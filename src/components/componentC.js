import React, { useState } from 'react';
import PageA from './componentA';
import PageB from './componentB';

function PageC() {
  const [sum, setSum] = useState(0);
  
  const receiveAndSumData = (page, value) => {
    if (page === 'a') setSum(sum + value);
    else if (page === 'b') setSum(sum + value);
    
    setTimeout(() => setSum(0),1000); 
};

return (
<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
<PageA onSendData={(page,value) => receiveAndSumData(page,value)} />
<PageB onSendData={(page,value) => receiveAndSumData(page,value)} />
<p>Total Sum: {sum}</p>

</div>);
}

export default PageC;
