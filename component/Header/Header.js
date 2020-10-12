import hero_img from '../../assets/img/hero_img.svg' ;

function Header(){
  return (
    <header>
        <div className="hero items-center lg:mt-12 flex flex-row  container mx-auto flex-wrap">
            <div className="lg:w-1/2 pt-4 mid:w-full sm:w-full">
                   <div>
                       <p className="text-6xl font-semibold text-green-400 antialiased mb-4 font-mono ">Blogski</p>
                   </div>
                   <p className="text-2xl font-Roboto font-mono mb-10">Blogging made Easy .Come Blog with us and Make Your Own Beautiful and Simple Blog</p>
                   <div className="buttons flex">
                       <button className="bg-green-400 hover:bg-green-600 rounded-full py-2 px-12 mr-8 duration-200 uppercase">Blog</button>
                       <button className="border-2 border-green-600 hover:bg-green-600 rounded-full py-2 px-8 ease-in duration-200 uppercase">Explore</button>
                   </div>
            </div>
            <div className="lg:w-1/2 p-4 mid:w-full sm:w-full">
                <img src={hero_img} className="object-cover"></img>
            </div>
            
        </div>
    </header>
  )
}


export default Header 