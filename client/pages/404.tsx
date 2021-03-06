import { BreathingRoom } from 'components/breathingRoom';
import { BreathingRoomSpacingEnum } from 'enums';
import Head from 'next/head';
import { PageProps } from 'types';
import { Text } from 'styles/text';

export default function NotFoundPage({ title }: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title} | Not found</title>
      </Head>
      <BreathingRoom breathe={BreathingRoomSpacingEnum.HORIZONTAL}>
        <Text>
          Whoops! Looks like you got lost. Hit one of the links above to get
          back to the site
        </Text>
      </BreathingRoom>
    </>
  );
}
