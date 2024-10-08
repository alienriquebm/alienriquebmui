export function ChevronIcon({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="10"
      fill="none"
      viewBox="0 0 6 10"
      role="button"
      onClick={onClick}
      className={`cursor-pointer transition-transform duration-300 flex-shrink-0 ${
        isOpen ? 'rotate-90 m-auto' : ''
      }`}
    >
      <path
        fill="#64748B"
        d="M.232 8.728a.745.745 0 00-.175.248.693.693 0 00.013.58c.045.09.108.172.187.24a.831.831 0 00.274.157.885.885 0 00.631-.023.816.816 0 00.26-.176l4.356-4.241A.714.714 0 006 5c0-.19-.08-.374-.222-.513L1.422.246a.816.816 0 00-.26-.176.878.878 0 00-.905.134.753.753 0 00-.187.24.697.697 0 00.162.828L4.062 5 .231 8.728z"
      ></path>
    </svg>
  );
}
