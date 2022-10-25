export default function Tag({ text }: { text: string; }) {
  return (
    <div className="ml-3 px-2 py-0.5 rounded-md bg-[#eeeeee] text-[#6C6F75]">
      {text}
    </div>
  );
}
