# CRM Integration Documentation

## Overview
The KAIYI website now integrates with the Legend Holding CRM system to automatically submit leads from all forms (test drive, service booking, and brochure download).

## Configuration

### CRM API Settings
- **API URL**: `https://lmmta.legendholding.com/CRM_IS/rest/RESTAPIDealerShip/RESTAPI_WEB`
- **API Key**: `6807da3c6c9a35dad0d98355`
- **Company ID**: `KAIYI-001`
- **Company Code**: `KAIYI`
- **Dealership ID**: `68084c7835cef3626fca1532`

### Lead Source Codes
The system automatically detects the traffic source and assigns appropriate lead source codes:

| Source | Code | Description |
|--------|------|-------------|
| Default | `TD-WEB-001` | Direct website visits |
| Facebook | `TD-FAC-201` | Facebook/Messenger traffic |
| Instagram | `TD-INS-301` | Instagram traffic |
| LinkedIn | `TD-LIN-401` | LinkedIn traffic |
| Twitter | `TD-TWI-501` | Twitter/X traffic |
| YouTube | `TD-VID-701` | YouTube traffic |
| WhatsApp | `TD-MSG-801` | WhatsApp traffic |
| Google | `TD-GOO-101` | Google search traffic |
| Email | `TD-EML-901` | Email campaign traffic |
| TikTok | `TD-TIK-1001` | TikTok traffic |

## How It Works

### 1. Form Submission Flow
1. User submits a form (test drive, service booking, or brochure download)
2. Data is saved to Supabase database
3. CRM lead is created with appropriate form type
4. Lead is submitted to CRM API (non-blocking)
5. User receives success response regardless of CRM submission status

### 2. Lead Source Detection
The system automatically detects traffic sources using:
- **UTM Parameters**: `utm_source`, `utm_medium`, `utm_campaign`, etc.
- **Referrer Analysis**: Checks `document.referrer` for known domains
- **Facebook Click ID**: Detects Facebook/Messenger traffic via `fbclid` parameter

### 3. Data Mapping
Each form type maps to different CRM lead formats:

#### Test Drive Form
- **Car Model**: `KAIYI {model} Test Drive`
- **Additional Info**: User's message/requirements

#### Service Booking Form
- **Car Model**: `KAIYI {model} Service`
- **Additional Info**: Number plate and service details

#### Brochure Download Form
- **Car Model**: `KAIYI {model} Brochure`
- **Additional Info**: Download request details

## Error Handling

### Non-Blocking CRM Submission
- CRM submission failures don't affect the user experience
- Form submissions succeed even if CRM is down
- All CRM errors are logged to console for debugging

### Error Types
- **Network Errors**: Connection timeouts, DNS failures
- **API Errors**: Invalid responses, authentication failures
- **Data Errors**: Malformed requests, missing required fields

## Testing

### Test UTM Parameters
Add these URL parameters to test different lead sources:
```
?utm_source=facebook&utm_medium=social&utm_campaign=test
?utm_source=google&utm_medium=cpc&utm_campaign=brand
?utm_source=email&utm_medium=newsletter&utm_campaign=launch
```

### Monitor Console Logs
Check browser console for:
- `CRM submission result: {success: true}`
- `CRM submission failed (non-blocking): [error details]`

## Monitoring

### Console Logs
- All CRM submissions are logged with detailed information
- Failed submissions include error details
- Success responses show lead source and submission status

### Network Tab
- Monitor the POST request to the CRM API
- Check response status and body
- Verify headers are correctly formatted

## Customization

### Adding New Lead Sources
1. Add new source code to `LEAD_SOURCE_CODES` in `src/lib/crm.ts`
2. Update `getLeadSource()` function to detect the new source
3. Test with appropriate UTM parameters

### Modifying Lead Data
1. Update `createCRMLead()` function in `src/lib/crm.ts`
2. Modify data mapping for specific form types
3. Add new fields to the `CRMLead` interface

### Changing API Configuration
1. Update `CRM_CONFIG` in `src/lib/crm.ts`
2. Modify API URL, keys, or company details
3. Test with a small form submission

## Security Notes

- API key is exposed in client-side code (required for browser requests)
- Consider implementing server-side proxy for production
- All sensitive data is transmitted over HTTPS
- CRM API has built-in rate limiting and validation

## Troubleshooting

### Common Issues

1. **"Invalid API key" error**
   - Check if API key is correct in CRM configuration
   - Verify company ID and dealership ID

2. **CORS errors**
   - CRM API should allow requests from your domain
   - Check if API endpoint is accessible

3. **Network timeouts**
   - CRM API might be slow or down
   - Check network connectivity

4. **Wrong lead source codes**
   - Verify UTM parameters are correctly formatted
   - Check referrer detection logic

### Debug Steps
1. Check browser console for detailed error messages
2. Monitor network tab for API request/response
3. Test with different UTM parameters
4. Verify CRM API is accessible from your location 