import SectionHeader from 'components/Base/SectionHeader'
import Accordion from 'components/Base/Accordion'

const paragraph =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. Even natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

const data = [
  {
    title: 'Pricing plans',
    paragraph,
  },
  {
    title: 'How to apply',
    paragraph,
  },
  {
    title: 'Purchasing process',
    paragraph,
  },
  {
    title: 'Usage guides',
    paragraph,
  },
]

const PeopleAlsoAsk = () => {
  return (
    <div className="with-section-gap">
      <SectionHeader heading="People also ask"></SectionHeader>
      <div>
        {data.map((item, idx) => (
          <Accordion key={idx} label={item.title}>
            {item.paragraph}
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default PeopleAlsoAsk