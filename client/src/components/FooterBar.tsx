import { Link } from "react-router-dom";
import { footerItems } from "../items/footerItems";
import { SocialLinks } from "../items/footerSocialLinks"


function FooterBar() {
  const list = footerItems.map((item: any, key: number) => (
    <div key={key}>
      <FooterBarItems item={item} />
    </div>
  ));

  return (
    <div className="bg-[--primary] px-20 py-10">
      <div className="flex items-center gap-2 mb-3">
        <img src="/Relish-logo.png" alt="logo" className="h-14" />
        <h1 className="text-3xl font-semibold">RELISH</h1>
      </div>
      <div className="flex justify-between p-2">
        {list}
        <div className="w-fit">
            <h1 className="text-2xl font-semibold mb-3">SOCIAL LINKS</h1>
            <div className="flex gap-2">
                { SocialLinks.map((item : any , key : number)=>(

                <Link to={item.url} className="bg-black w-fit rounded-full flex h-8" key={key}><img src={item.imgUrl} alt={item.name} /></Link>

            ))}
            </div>
        </div>
        </div>
    </div>
  );
}

export default FooterBar;

function FooterBarItems({ item }: any) {
  const list = item.body.map((i: any, key: any) => (
    <Link to={i.url} key={key}>{i.name}</Link>
  ));

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3" >{item.title}</h1>
      <ul className="flex flex-col">{list}</ul>
    </div>
  );
}
