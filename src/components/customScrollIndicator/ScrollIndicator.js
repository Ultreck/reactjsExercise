import React, { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data?.products?.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  //   console.log(data);

  const handleScrollPercentage = () => {
    // console.log(
    //   'body', document.body.scrollTop,
    //   'document1', document.documentElement.scrollTop,
    //   'document2', document.documentElement.scrollHeight,
    //   'document3', document.documentElement.clientHeight
    // );
    const howMuchScrollPercent =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage(Math.round((howMuchScrollPercent / height) * 100));
};

useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
        window.removeEventListener("scroll", () => {});
    };
}, []);

if (loading) {
    return <div className="text">Loading data please wait.</div>
    
}

console.log(scrollPercentage);
  return (
    <div>
      <div className="text-white bg-slate-900 scroll-smooth">
        <div className="text w-full bg-slate-950 fixed">
        <h1 className="text-white px-10 py-2">Custom Scroll Indicator</h1>
        <div className="text w-full h-2 bg-slate-900">
            <div className={`text bg-[#64ffda] h-full ${scrollPercentage < 100 && 'rounded-tr rounded-br'}`} style={{width: `${scrollPercentage}%`}}></div>
        </div>
        </div>
        <div className="text">
          {data &&
            data?.length > 0 &&
            data?.map((item) => (
              <p className="text" key={item.id}>
                {item?.title}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
