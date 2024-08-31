import React from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FormComponents = ({ formData, handleChange, handleLanguageChange, handleSubmit }) => {
    const { t, i18n } = useTranslation();

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
            <h1>{t('form.pageTitle')}</h1>
            <FormControl fullWidth style={{ maxWidth: '200px', margin: 'normal' }}>
                <InputLabel id="language-select-label">{t('form.language')}</InputLabel>
                <Select
                    labelId="language-select-label"
                    value={i18n.language}
                    onChange={handleLanguageChange}
                    style={{ fontSize: '0.875rem' }}
                >
                    <MenuItem value="kk">Қазақша</MenuItem>
                    <MenuItem value="ru">Русский</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="looking-for-label">{t('form.lookingFor')}</InputLabel>
                <Select
                    labelId="looking-for-label"
                    name="lookingFor"
                    value={formData.lookingFor}
                    onChange={handleChange}
                >
                    <MenuItem value="">{t('form.choose')}</MenuItem>
                    <MenuItem value="grandfather">{t('form.grandfather')}</MenuItem>
                    <MenuItem value="grandmother">{t('form.grandmother')}</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="returned-from-war-label">{t('form.returnedFromWar')}</InputLabel>
                <Select
                    labelId="returned-from-war-label"
                    name="returnedFromWar"
                    value={formData.returnedFromWar}
                    onChange={handleChange}
                >
                    <MenuItem value="">{t('form.choose')}</MenuItem>
                    <MenuItem value="returned">{t('form.returned')}</MenuItem>
                    <MenuItem value="notReturned">{t('form.notReturned')}</MenuItem>
                </Select>
            </FormControl>

            <TextField
                label={t('form.lastName')}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                label={t('form.firstName')}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                label={t('form.middleName')}
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                label={t('form.ancestorNames')}
                name="ancestorNames"
                value={formData.ancestorNames}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        name="birthDateUnknown"
                        checked={formData.birthDateUnknown}
                        onChange={handleChange}
                    />
                }
                label={t('form.unknownBirthDate')}
            />
            {!formData.birthDateUnknown && (
                <TextField
                    label={t('form.birthDate')}
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                />
            )}

            {formData.birthDateUnknown && (
                <TextField
                    label={t('form.approximateDateRange')}
                    name="approximateDateRange"
                    value={formData.approximateDateRange}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
            )}

            <TextField
                label={t('form.birthPlaceCountryRegion')}
                name="birthPlaceCountryRegion"
                value={formData.birthPlaceCountryRegion}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                label={t('form.birthPlaceCity')}
                name="birthPlaceCity"
                value={formData.birthPlaceCity}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                label={t('form.conscriptionDate')}
                type="month"
                name="conscriptionDate"
                value={formData.conscriptionDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
            />

            <FormControl fullWidth margin="normal">
                <InputLabel id="marital-status-label">{t('form.maritalStatus')}</InputLabel>
                <Select
                    labelId="marital-status-label"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                >
                    <MenuItem value="">{t('form.choose')}</MenuItem>
                    <MenuItem value="married">{t('form.married')}</MenuItem>
                    <MenuItem value="divorced">{t('form.divorced')}</MenuItem>
                    <MenuItem value="neverMarried">{t('form.neverMarried')}</MenuItem>
                    <MenuItem value="widowWidower">{t('form.widowWidower')}</MenuItem>
                </Select>
            </FormControl>

            <TextField
                label={t('form.childrenNames')}
                name="childrenNames"
                value={formData.childrenNames}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                label={t('form.relativesListed')}
                name="relativesListed"
                value={formData.relativesListed}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        name="prisoner"
                        checked={formData.prisoner}
                        onChange={handleChange}
                    />
                }
                label={t('form.prisonerCheckbox')}
            />
            {formData.prisoner && (
                <TextField
                    label={t('form.knownPrisonInfo')}
                    name="prisonerCheckbox"
                    value={formData.prisonerInfo}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
            )}

            <TextField
                label={t('form.attachFiles')}
                type="file"
                name="files"
                inputProps={{ multiple: true }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true
                }}
            />

            <TextField
                label={t('form.searcherFullName')}
                name="searcherFullName"
                value={formData.searcherFullName}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                label={t('form.phoneNumber')}
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                label={t('form.homeAddress')}
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                label={t('form.email')}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <FormControl fullWidth margin="normal">
                <InputLabel id="heard-about-us-label">{t('form.heardAboutUs')}</InputLabel>
                <Select
                    labelId="heard-about-us-label"
                    name="heardAboutUs"
                    value={formData.heardAboutUs}
                    onChange={handleChange}
                >
                    <MenuItem value="">{t('form.choose')}</MenuItem>
                    <MenuItem value="Instagram">{t('form.Instagram')}</MenuItem>
                    <MenuItem value="Facebook">{t('form.Facebook')}</MenuItem>
                    <MenuItem value="TikTok">{t('form.TikTok')}</MenuItem>
                    <MenuItem value="friends">{t('form.friends')}</MenuItem>
                    <MenuItem value="internetSearch">{t('form.internetSearch')}</MenuItem>
                    <MenuItem value="fromRodology">{t('form.fromRodology')}</MenuItem>
                    <MenuItem value="other">{t('form.other')}</MenuItem>
                </Select>
            </FormControl>
            {formData.heardAboutUs === 'other' && (
                <TextField
                    label={t('form.heardAboutUsOther')}
                    name="heardAboutUsOther"
                    value={formData.heardAboutUsOther}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
            )}

            <Button variant="contained" color="primary" type="submit">
                {t('form.submit')}
            </Button>
        </form>
    );
};

export default FormComponents;
