import { Fragment } from 'react'

export const Text = ({ text }) => {
  if (!text) {
    return null
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value
    return (
      <span
        key={index}
        className={[
          bold ? 'font-bold' : null,
          italic ? 'italic' : null,
          code ? 'tracking-tight' : null,
          strikethrough ? 'line-through' : null,
          underline ? 'underline' : null
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <a className='link' href={text.link.url}>
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    )
  })
}

export const renderBlocks = block => {
  const { type, id } = block
  const value = block[type]
  if (!value) return null

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      )
    case 'heading_1':
      return (
        <h1>
          <Text text={value.rich_text} />
        </h1>
      )
    case 'heading_2':
      return (
        <h2 className='!mt-12'>
          <Text text={value.rich_text} />
        </h2>
      )
    case 'heading_3':
      return (
        <h3 className='!mt-8'>
          <Text text={value.rich_text} />
        </h3>
      )
    case 'numbered_list_item':
      return (
        <li className='list-decimal'>
          <Text text={value.rich_text} />
        </li>
      )
    case 'bulleted_list_item':
      return (
        <li>
          <Text text={value.rich_text} />
        </li>
      )
    case 'to_do':
      return (
        <div>
          <label className='to-do' htmlFor={id}>
            <input
              type='checkbox'
              id={id}
              aria-describedby={value.rich_text}
              defaultChecked={value.checked}
            />{' '}
            <Text text={value.rich_text} />
          </label>
        </div>
      )
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map(block => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </details>
      )
    case 'child_page':
      return <p>{value.title}</p>
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url
      const caption = value.caption ? value.caption[0]?.plain_text : ''
      return (
        <div className='imageContainer'>
          <img src={src} alt={caption} loading='lazy' />
          {caption && (
            <figcaption className='text-tiny italic ml-px opacity-60'>
              {caption}
            </figcaption>
          )}
        </div>
      )
    case 'divider':
      return <hr key={id} />
    case 'quote':
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>
    case 'callout':
      return (
        <div className='callout'>
          {value.icon && <span>{value.icon.emoji}</span>}
          <div>
            <Text text={value.rich_text} />
          </div>
        </div>
      )
    case 'code':
      return (
        <div className='relative text-primary  rounded-2xl bg-white/5'>
          <p className='px-4 py-2 border-b border-b-white text-tiny opacity-60 capitalize'>
            {value.language}
          </p>

          <pre className=' leading-8 overflow-auto p-6 whitespace-pre'>
            <code className='font-mono flex flex-wrap' key={id}>
              {value.rich_text[0].plain_text}
            </code>
          </pre>
        </div>
      )
    case 'video':
      return (
        <div className='relative mx-auto h-full w-full overflow-hidden pb-[56.25%]'>
          <iframe
            className='absolute top-0 left-0 mx-auto h-full w-full'
            src={value.external.url}
            frameBorder='0'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='YouTube Video'
          />
        </div>
      )
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`
  }
}
