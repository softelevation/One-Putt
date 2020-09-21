import TcpSocket from 'react-native-tcp-socket';
const client = TcpSocket.createConnection({
  port: 8080,
  host: '192.168.1.100',
  tls: true,
});

export default client;
