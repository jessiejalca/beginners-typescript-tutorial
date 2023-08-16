interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async () => {
  // These two options are probably better than
  // ... = async (): Promise<LukeSkywalker> ...
  // because it will infer that anyway when you
  // use these other methods:

  // METHOD 2:
  // This also works; it tells TS the shape of the
  // data that should be coming in:
  // const data: LukeSkywalker = await fetch...
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  // METHOD 1:
  // This is a good way to let TypeScript know what
  // data to expect while still knowing it doesn't
  // technically know for sure what data will come in:
  return data as LukeSkywalker;
};
