

function HomeAvatar() {
  return (
    <section className="home-avatar">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <img className="home-avatar__avatar" src="/Nicola_Macchitella-home.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      </main>
      <HomeAvatar />
      
    </div>
  );
}
