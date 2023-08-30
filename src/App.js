import React from 'react';
import { useBarcode } from '@createnextapp/react-barcode';

function App() {
  const { inputRef } = useBarcode({
    value: '123456789145',
    options: {
      // background: '#ffff00',
    },
  });

  return (
    <div id="blockContainer" style={{ width: '100%' }}>
      <div id="blockContainer1">
        <row style={{ float: 'right', textAlign: 'right' }}>
          <p style={{ marginTop: '0px' }}>123456789145</p>
          <p style={{ marginTop: '-10px' }}>Shop0040-Woliso1</p>
          <p style={{ marginTop: '-10px' }}>ssbwoliso1.cashier5</p>
          <p style={{ marginTop: '-10px' }}>2023/03/21 11:23:32 (UTC-7)</p>
        </row>
      </div>
      {/* for multi ticket */}
      <div id="blockContainer2">
        <row>
          <p>
            <b style={{ float: 'left', marginTop: '-10px' }}>Win</b>
            <b style={{ float: 'right', marginTop: '-10px' }}>Br 50.00</b>
          </p>
        </row>
      </div>
      <div id="blockContainer3">
        <row style={{ float: 'left', marginTop: '-10px' }}>
          <p>Keno 2023/03/21 01:08:00 #1062</p>
          <p style={{ marginLeft: '15px', marginTop: '-10px' }}>
            3,4,67,4 35.00
          </p>
        </row>
      </div>
      <div id="blockContainer4">
        <row>
          <p>
            <b style={{ float: 'left' }}>Total Stake</b>
            <b style={{ float: 'right' }}>Br 50.00</b>
          </p>
        </row>
      </div>
      <div id="blockContainer5">
        <row>
          <table style={{ width: '100%' }}>
            <tr>
              <td style={{ float: 'left' }}>Min Payout (incl. stake)</td>
              <td style={{ float: 'right' }}>Br 50.00</td>
            </tr>
            <tr>
              <td style={{ float: 'left', marginTop: '-7px' }}>
                Max Payout (incl. stake)
              </td>
              <td style={{ float: 'right', marginTop: '-7px' }}>Br 1,750.00</td>
            </tr>
          </table>
        </row>
      </div>
      <div id="blockContainer6">
        <row style={{ textAlign: 'center' }}>
          <div>
            <br />
            <img ref={inputRef} alt="barcode" />
          </div>
        </row>
      </div>
      <div id="blockContainer7">
        <row style={{ textAlign: 'center' }}>
          <p style={{ marginTop: '-5px' }}>
            Standard Shop Terms & Conditions Apply
          </p>
          <p style={{ marginTop: '15px' }}>801934D44A7AB</p>
        </row>
      </div>
    </div>
  );
}

export default App;
