export default function objectToArray(obj: any) {
  const newArray = Object.keys(obj)
    .map((key) => ({
      id: key,
      ...obj[key],
    }))
    .slice(1);

  const education = newArray.map((item) => ({
    id: item.id,
    institution: item.institution,
    date: item.date,
    course: item.course,
  }));

  const projects = newArray.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    stack: item.stack,
    imgUrl: item.imgUrl,
    githubLink: item.githubLink,
    deployLink: item.deployLink,
  }));

  return { education, projects };
}
