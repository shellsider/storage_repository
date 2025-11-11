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
  ComponentRendering
} from '@sitecore-content-sdk/nextjs';

export type CommonComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

export type HeroBannerProps = CommonComponentProps & {
  fields: {
    Title: TextField;
    Description: RichTextField;
    BackgroundImage: ImageField;
    PrimaryCta: LinkField;
  };
};

export const Default = (props: HeroBannerProps): JSX.Element => {
  const id = props.rendering?.uid || 'hero-banner';
  return (
    <section id={id} className={`${props.params?.styles || ''} relative`}>
      {/* Background image */}
      {props.fields?.BackgroundImage && (
        <div className="absolute inset-0 -z-20">
          <SitecoreImage field={props.fields.BackgroundImage} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Overlay when background exists */}
      {props.fields?.BackgroundImage && (
        <div className="absolute inset-0 bg-black/50 -z-10" />
      )}

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="text-white">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
            <Text field={props.fields.Title} />
          </h1>

          <div className="prose prose-white max-w-3xl text-base md:text-lg lg:text-xl mb-8">
            <RichText field={props.fields.Description} />
          </div>

          <div className="mt-8 md:mt-12 lg:mt-16">
            <SitecoreLink field={props.fields.PrimaryCta} className="inline-block bg-lime-500 text-neutral-900 px-6 py-3 rounded-md font-semibold hover:bg-lime-600 transition">
              {/* If the link field provides text, SitecoreLink will render it; provide fallback text */}
              <span>Talk to an Advisor</span>
            </SitecoreLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Variant = (props: HeroBannerProps): JSX.Element => {
  return <Default {...props} />;
};

export default Default;
