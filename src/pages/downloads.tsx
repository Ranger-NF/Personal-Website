function Downloads() {
  return (
    <div className="p-42 text-center">
      <a
        href="/dino-game-assets.zip"
        download="DinoGameAssets.zip"
        className="navlinks group hover:translate-x-4 flex gap-3 text-center items-center transition hover:underline"
      >
        Download Dino Game Assets
      </a>
    </div>
  );
}

export default Downloads;
