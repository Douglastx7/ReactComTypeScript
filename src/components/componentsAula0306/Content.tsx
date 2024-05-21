
import { useUi } from "./contexts/UiContext";

const Content = () => {
  const { dark } = useUi();
  return (
    <div
      style={{
        height: '400px',
        color: dark ? '#fff' : '#222',
        backgroundColor: dark ? '#222' : '#fff',
      }}
    >
      Esse é um teste do modo.
    </div>
  );
};

export default Content;