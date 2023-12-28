import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
  render(<App />);
  const appComponent = screen.getByTestId('app-component');
  expect(appComponent).toBeInTheDocument();
});

test('allows user registration and shows success message', async () => {
  render(<App />);

  // Seleciona elementos de entrada e botão
  const nomeInput = screen.getByLabelText(/nome/i);
  const idadeInput = screen.getByLabelText(/idade/i);
  const sexoInput = screen.getByLabelText(/sexo/i);
  const statusInput = screen.getByLabelText(/status/i);
  const cadastrarButton = screen.getByText(/cadastrar/i);

  // Preenche os campos de entrada
  fireEvent.change(nomeInput, { target: { value: 'João' } });
  fireEvent.change(idadeInput, { target: { value: '25' } });
  fireEvent.change(sexoInput, { target: { value: 'M' } });
  fireEvent.change(statusInput, { target: { value: 'ativo' } });

  // Clica no botão de cadastrar
  fireEvent.click(cadastrarButton);

  // Aguarda a mensagem de sucesso aparecer e depois desaparecer
  const successMessage = await screen.findByText(/cadastro realizado com sucesso/i);
  expect(successMessage).toBeInTheDocument();

  // Agora, espera um tempo para a mensagem de sucesso desaparecer (pode ser ajustado conforme necessário)
  await waitFor(() => {
    expect(successMessage).not.toBeInTheDocument();
  });

  // Adicione mais asserções conforme necessário
});

// Adicione mais testes conforme necessário