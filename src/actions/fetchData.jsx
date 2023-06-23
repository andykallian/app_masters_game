import axios from 'axios';

const apiUrl = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data';
const email = 'andersonkallian@yahoo.com.br';

const axiosInstance = axios.create({
  timeout: 5000
});

export const fetchData = async () => {
  try {
    const response = await axiosInstance.get(apiUrl, {
      headers: {
        'dev-email-address': email
      }
    });

    if (response.status >= 500 && response.status <= 509) {
      throw new Error('O servidor falhou em responder, tente recarregar a página');
    }

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      // Requisição cancelada
      return null;
    }

    if (error.code === 'ECONNABORTED') {
      throw new Error('O servidor demorou para responder, tente mais tarde');
    }

    throw new Error('O servidor não conseguirá responder por agora, tente voltar novamente mais tarde');
  }
};