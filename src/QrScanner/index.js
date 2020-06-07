import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import './style.css';
import { Redirect } from 'react-router-dom';

export const QrScanner = () => {
  const [result, setResult] = useState();
  const handleScan = (newResult) => {
    if (newResult) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'test@test.test',
          token: newResult,
          eventId: 3
        })
      };
      fetch('https://localhost:8081/qr/student', requestOptions)
        .then(response => response.json());
      setResult(newResult);
    }
  }
  return result ? (
    <Redirect to={{
      pathname: '/resultPage',
      state: { success: true }
    }}
    />
  ) : (
      <div style={{textAlign: 'center'}}>
        <h2>Scan a QR</h2>
        <QrReader
          delay={500}
          style={{
            height: 240,
            width: 320,
          }}
          onError={console.error}
          onScan={handleScan}
        />
      </div>
    )
}