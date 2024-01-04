import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    HStack,
    Image,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { useRouter } from "next/navigation";
  import { ArrowLeft } from "lucide-react";
  import UserSettingLayout from "@/components/layouts/userSettingLayout";
  
  const TermOfUse = () => {
    const router = useRouter();
  
    return (
      
      <Box>
        <Card>
          <CardHeader>
            <HStack>
              <Box onClick={() => router.back()}>
                {" "}
                <ArrowLeft />
              </Box>
              <Text fontSize="18px" fontWeight="600">
                Terms & Conditions
              </Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <Stack spacing="7" textAlign="justify">
              <p>
                Protecting your privacy and ensuring that your personal data is
                held securely is very important to Mahindra & Mahindra Limited
                ("M&M" or "we/our/us" or the "Company", which includes its
                divisions, affiliates and group companies) and as such this
                Privacy Policy and Privacy Statement shall be referred and read as
                an integral part of the Terms of Use of the Website.
              </p>
              <p>
                We collect information about you when you visit our site, use our
                services, or view our online advertisements. The information which
                we collect and store during normal use of the site is used to
                monitor the use of the site and to help further development of our
                products and services. In general, you can visit the Website
                (https://auto.mahindra.com) on the Internet without telling us who
                you are or providing data that personally identifies you. Such use
                does not result in any personally identifiable data being
                collected or stored.
              </p>
              <p>
                This Privacy Policy applies only to the Website. The text and
                graphic links on the Website may link to third party social media
                sites, websites and information and service providers that may
                also collect information from you. In addition, some of the pages
                on the Website may lead to co-branded web pages that are hosted
                and served by third-parties. In each of the said cases, we have no
                control over the privacy policy of any third-party company and
                advise you to please examine their privacy policy prior to
                submitting any personal information.
              </p>
              <p>
                In general you can visit the Website on the Internet without
                telling us who you are or providing personal information. Such use
                does not result in any personally identifiable data being
                collected or stored. We may however collect information about you
                when you visit the Website, use our services, or view our online
                advertisements. Having said that, unless you submit personal
                information about yourself by filing in any form on the Website or
                by sending us an e-mail, we are not
              </p>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    );
  };
  
  
  
  export default TermOfUse;
  