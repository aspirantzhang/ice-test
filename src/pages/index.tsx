import { useNavigation } from "react-router-dom";

export default function HomePage() {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? (
        <>Loading...</>
      ) : (
        <>
          <h3>Hello World</h3>
        </>
      )}
    </>
  );
}
