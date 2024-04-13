function DemoPage({children}) {
	return (
		<>
			<header className="text-center pt-28">
				<h2 className="text-5xl text-slate-900">Demo Page Component </h2>
			</header>
			<main className=" max-w-md mx-auto  py-24">
				<section className="bg-white border border-black p-3">
					<header className="mb-10">
						<h2>To Do List Display</h2>
					</header>

					<aside className=" bg-neutral-100 flex justify-between border border-black py-2.5 px-3">
						<header>
							<h3>To Do Item</h3>
						</header>
						<footer className="flex flex-col text-xs text-neutral-500">
							<button>edit</button>
							<button>delete</button>
						</footer>
					</aside>
				</section>
			</main>
		</>
	)
}

export default DemoPage
