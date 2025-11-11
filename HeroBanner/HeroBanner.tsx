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
    <section id={id} className={`${props.params?.styles || ''} relative py-16`}>
      {props.fields.BackgroundImage && (
        <SitecoreImage
          field={props.fields.BackgroundImage}
          editable
          className="absolute inset-0 w-full h-full object-cover -z-10"
          priority
        />
      )}

      {/* Dark overlay to ensure readable text on image */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="container mx-auto px-6 lg:px-24 py-20 text-white">
        <div className="max-w-4xl">
          <Text
            field={props.fields.Title}
            tag="h1"
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white"
          />

          <RichText
            field={props.fields.Description}
            className="text-base sm:text-lg md:text-xl text-white/90 space-y-4 mb-8"
          />

          {props.fields.PrimaryCta && (
            <div className="mt-6 w-full sm:w-auto">
              <SitecoreLink
                field={props.fields.PrimaryCta}
                className="inline-block bg-lime-500 text-neutral-900 px-6 py-3 rounded-md font-semibold hover:bg-lime-600 transition text-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Default;
