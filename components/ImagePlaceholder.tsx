interface ImagePlaceholderProps {
  title: string;
  note: string;
  ratio?: 'square' | 'landscape' | 'portrait' | 'wide';
}

const ratioClassMap: Record<NonNullable<ImagePlaceholderProps['ratio']>, string> = {
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/9]',
};

export default function ImagePlaceholder({ title, note, ratio = 'wide' }: ImagePlaceholderProps) {
  return (
    <div
      className={`w-full ${ratioClassMap[ratio]} rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/70 p-6 flex flex-col justify-between`}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Image Placeholder</p>
        <h4 className="mt-3 text-xl font-bold text-gray-900">{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-gray-600">{note}</p>
    </div>
  );
}
