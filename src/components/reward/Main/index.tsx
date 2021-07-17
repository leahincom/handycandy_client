import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';

import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import Body, { BodyProps } from '../Body';
import RewardBanner, { RewardBannerProps } from '../Banner';
import Emoticon, { EmoticonProps } from '../Body/Emoticon';
import Diary from '../Body/Diary';
import { getRewardCandy } from '../../../pages/api/useGets/getRewardCandy';

const BannerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export interface RewardMainProps extends BodyProps, EmoticonProps, RewardBannerProps {}

export default function RewardMain({ bannerTitle, bannerDesc }: RewardMainProps) {
  const router = useRouter();
  const candy_id = router.query.id as string;

  const { isLoading, isError, data, error } = useQuery(['reward', router.query.id], () => getRewardCandy(candy_id));

  return (
    <>
      {data && (
        <ReactFullpage
          verticalCentered={false}
          render={({ fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Body
                  candy_image_url={data.result.candy_image_url}
                  category_name={data.result.category_name}
                  candy_name={data.result.candy_name}
                  detail_info={data.result.detail_info}
                  shopping_link={data.result.shopping_link}
                  year={data.result.year}
                  month={data.result.month}
                  date={data.result.date}
                  fullpageApi={fullpageApi}
                />
                <Emoticon candy_name={data.result.candy_name} fullpageApi={fullpageApi} />
                <Diary />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      )}
      <BannerWrapper>
        <RewardBanner bannerTitle={bannerTitle} bannerDesc={bannerDesc} />
      </BannerWrapper>
    </>
  );
}
