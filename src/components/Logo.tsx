type Props = { small?: boolean };

export function Logo({ small = false }: Props) {
  return (
    <div className="flex flex-col leading-none select-none">
      <span
        className={`font-display tracking-[0.04em] text-koi-500 ${
          small ? 'text-[22px]' : 'text-[26px]'
        }`}
      >
        KOIWERKS
      </span>
      <span className="font-jp text-[9px] tracking-[0.35em] text-koi-500/70 mt-0.5">
        コイワークス コイワークス
      </span>
    </div>
  );
}
