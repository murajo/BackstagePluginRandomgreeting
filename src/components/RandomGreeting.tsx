import React, { useState } from 'react';
import { useApi, configApiRef } from '@backstage/core-plugin-api';

export const RandomGreeting: React.FC = () => {
  const config = useApi(configApiRef);
  const backendUrl = config.getString('backend.baseUrl')
  const [greeting, setGreeting] = useState<string>('');
  const [imageurl, setImageUrl] = useState<string>('');

  const greetingClick = async () => {
    try {
      const response = await fetch(backendUrl + '/api/randomgreeting/greeting', { method: 'GET' });
      if (!response.ok) {
        throw new Error('Failed to fetch data from the backend');
      }
      const data = await response.json();
      setGreeting(data.greeting);
      setImageUrl(data.imageurl)
    } catch (error) {
      console.error('Error fetching data from the backend', error);
    }
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>三種の挨拶</h1>
      <p>ボタンをクリックするたびに三種類の挨拶から一つ出力されるぞ！</p>
      <div></div>
      <button onClick={greetingClick}>☆挨拶☆</button>
      <div>
      挨拶：{greeting ? greeting : "上のボタンを押してね"}
      </div>
      {imageurl ? (
        <img width="256" height="256" src={imageurl} alt="挨拶の画像" />
      ) : (
        <img width="256" height="256" src="https://1.bp.blogspot.com/-3wsYvUnKhNE/Wc8f-o6JCrI/AAAAAAABHJw/xo60FyvnUp4DKZ53GOcCAXn1KxcYBbyygCLcBGAs/s400/text_mu.png" alt="初期画像" />
      )}
    </div>
  );
};

