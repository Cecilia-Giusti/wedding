import React from "react";

interface bandeauPartieInt {
  text: string;
}

const BandeauPartie = ({ text }: bandeauPartieInt) => {
  return (
    <div className='organisation-bandeau'>
      <p className='organisation-bandeau-text'>{text}</p>
    </div>
  );
};

export default BandeauPartie;
