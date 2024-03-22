export default function Pill({ text }: { text: string }) {
    return (
        <>
            <div className="m-1 py-2 px-4 shadow-md no-underline rounded-full bg-gray-500 text-nowrap text-white font-sans font-semibold text-sm border-blue btn-primary focus:outline-none active:shadow-none mr-2d min-w-3l ">
                {text}
            </div>
        </>
    )
}