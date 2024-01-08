import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [remainingTime]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const submit = () => {
     e.preventDefault();

    post(route("creatCode"));
};

  return (
    <div>
        
      <p>زمان باقی‌مانده: {minutes} دقیقه و {seconds} ثانیه</p>
      {remainingTime === 0 && <button className='mb-11'
       onClick={() => submit() }>ارسال مجدد</button>}
    </div>
  );
};

export default Timer;