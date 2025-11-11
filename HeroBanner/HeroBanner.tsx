import { JSX } from 'react';
import {
  Text,
  RichText,
  TextField,
  RichTextField,
  Image as SitecoreImage,
  ImageField,
  Link as SitecoreLink,
  LinkField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

export type CommonComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

export type HeroBannerProps = CommonComponentProps & {
  fields: {
    Title?: TextField;
    Description?: RichTextField;
    BackgroundImage?: ImageField;
    PrimaryCta?: LinkField;
  };
};

export const Default = (props: HeroBannerProps): JSX.Element => {
  const id = props.params?.RenderingIdentifier;

  if (!props.fields) {
    return (
      <div className="bg-gray-200 p-10 text-center">
        Component properties are not configured.
      </div>
    );
  }

  return (
    <section id={id} className={`${props.params?.styles || ''} relative bg-neutral-900`}> 
      {props.fields.BackgroundImage && (
        <SitecoreImage
          field={props.fields.BackgroundImage}
          editable
          className="absolute inset-0 w-full h-full object-cover -z-10"
          priority
        />
      )}

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20 lg:py-28 text-white">
        <div className="max-w-4xl">
          <Text
            field={props.fields.Title}
            tag="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6"
          />

          <RichText
            field={props.fields.Description}
            className="text-base md:text-lg lg:text-xl text-white/90 space-y-4 mb-8"
          />

          {props.fields.PrimaryCta && (
            <div className="mt-6">
              <SitecoreLink
                field={props.fields.PrimaryCta}
                className="inline-block bg-lime-500 text-neutral-900 px-6 py-3 rounded-md font-semibold hover:bg-lime-600 transition"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Default;
