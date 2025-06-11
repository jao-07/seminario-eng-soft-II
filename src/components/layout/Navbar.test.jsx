import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Navbar from './Navbar';

const renderWithRouter = (ui) => {
  return render(<HashRouter>{ui}</HashRouter>);
};

describe('Navbar', () => {
  test('renderiza o logo', () => {
    renderWithRouter(<Navbar />);
    const logo = screen.getByAltText(/Costs/i);
    expect(logo).toBeInTheDocument();
  });

  test('renderiza todos os links da navegação', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getByRole('link', { name: /Inicio/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Projetos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Empresa/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contatos/i })).toBeInTheDocument();
  });

  test('os links apontam para os caminhos corretos', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getByRole('link', { name: /Inicio/i }).getAttribute('href')).toBe('#/');
    expect(screen.getByRole('link', { name: /Projetos/i }).getAttribute('href')).toBe('#/projects');
    expect(screen.getByRole('link', { name: /Empresa/i }).getAttribute('href')).toBe('#/company');
    expect(screen.getByRole('link', { name: /Contatos/i }).getAttribute('href')).toBe('#/contact');
  });
});
