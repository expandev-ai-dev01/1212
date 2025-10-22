/**
 * @component Footer
 * @summary Application footer with copyright and links
 * @domain core
 * @type ui-component
 * @category layout
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            © {currentYear} Quiz Naruto. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">Feito com ❤️ para fãs de Naruto</p>
        </div>
      </div>
    </footer>
  );
};
